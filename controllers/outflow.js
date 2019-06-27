class Outflow {

  constructor(value, account, user, date, scheduling){
    this._value = value;
    this._account = account;
    this._user = user;
    this._date = date;
    this._scheduling = scheduling;

  }

  get Value(){
    return this._value;
  }

  get Account(){
    return this._account;
  }

  get User(){
    return this._user;
  }

  get Date(){
    return this._date;
  }

  get Scheduling(){
    return this._scheduling;
  }

  set Value( value ){
    this._value = value;
  }

  set Account ( Account ){
    this._account = Account;
  }

  set User ( User ){
    this._user = User;
  }

  set Date ( Date ){
    this._date = Date;
  }

  set Scheduling ( Scheduling ){
    this._scheduling = Scheduling;
  }
}

module.exports = Outflow;