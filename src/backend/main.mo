import Time "mo:core/Time";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  let bookings = Map.empty<Text, Booking>();

  type Booking = {
    clientName : Text;
    clientPhone : Text;
    selectedMonth : Text;
    createdAt : Time.Time;
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      Int.compare(booking1.createdAt, booking2.createdAt);
    };
  };

  public shared ({ caller }) func createBooking(clientName : Text, clientPhone : Text, selectedMonth : Text) : async Text {
    let id = clientName # clientPhone;
    if (bookings.containsKey(id)) {
      Runtime.trap("Booking already exists.");
    } else {
      let booking : Booking = {
        clientName;
        clientPhone;
        selectedMonth;
        createdAt = Time.now();
      };
      bookings.add(id, booking);
      "Booking successfully created";
    };
  };

  public query ({ caller }) func getBookingsByMonth(month : Text) : async [Booking] {
    bookings.values().filter(func(b) { b.selectedMonth == month }).toArray().sort();
  };
};
