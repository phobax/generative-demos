

module.exports = {

  error : (code, message) =>{
    return {
      code,
      message,
    }
  },

  "OK" : {"code": 0, "message": {}},

  "GENERIC" : {
    "code" : -1,
    "state" : "all",
    "message" : {"message":"generic error"}
  },

  "NO_PASSWORD" : {
    "code" : 1,
    "state" : "Login",
    "message" : {"message":"no password"}
  },

  "WRONG_PASSWORD" : {
    "code" : 2,
    "state" : "Login",
    "message" : {"message":"wrong password"}
  },

  "UNKNOWN_USER" : {
    "code" : 3,
    "state" : "",
    "message" : {"message":"unknown user"}
  },

  "NO_POD_AVAILABLE" : {
    "code" : 4,
    "state" : "",
    "message" : {"message":"no pod available"}
  },

  "UNKNOWN_ORDER" : {
    "code" : 5,
    "state" : "",
    "message" : {"message":"unknown order"}
  },

  "CANT_CONNECT_POD" : {
    "code" : 5,
    "state" : "",
    "message" : {"message":"Cannot connect to pod"}
  },

  "WRONG_TRAVEL_MODE" : {
    "code" : 6,
    "state" : "",
    "message" : {"message":"allowed: ['driving', 'walking']"}
  },

  "CANT_GET_ROUTE" : {
    "code" : 7,
    "state" : "",
    "message" : {"message":"cant get route"}
  },

  "UNKNOWN_POD" : {
    "code" : 8,
    "state" : "",
    "message" : {"message":"pod not registered"}
  },

  "ORDER_EXPIRED" : {
    "code" : 9,
    "state" : "",
    "message" : {"message":"order offer timed out"}
  },

  "NO_ORDER" : {
    "code" : 10,
    "state" : "",
    "message" : {"message":"user has no order"}
  },

  "MAPBOX_SERVER" : {
    "code" : 11,
    "state" : "",
    "message" : {"message":"call to mapbox failed"}
  },

  "INVALID_VOUCHER_CODE" : {
    "code" : 12,
    "state" : "",
    "message" : {"message":"no voucher for given code"}
  },

  "INVALID_VOUCHER_TIMESLOT" : {
    "code" : 13,
    "state" : "",
    "message" : {"message":"for this voucher no ride at requested timeslot available"}
  },

  "ILLEGAL_DESTINATION_FOR_ORDER" : {
    "code" : 14,
    "state" : "",
    "message" : {"message":"service or voucher does not allow ride to that destination"}
  },

  "ORDER_UNCONFIRMED" : {
    "code" : 15,
    "state" : "",
    "message" : {"message":"cannot assign pod to unconfirmed order"}
  },

  "ORDER_FOR_USER_PENDING" : {
    "code" : 16,
    "state" : "",
    "message" : {"message":"user has already requested an order. confirm or cancel."}
  },

  "DEPRECATED" : {
    "code" : 666,
    "state" : "",
    "message" : {"message":"deprecated api route"}
  }
}
