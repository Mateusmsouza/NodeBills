class Outflow {

  constructor(value, account, user, date, scheduling){
    this.value = value;
    this.account = account;
    this.user = user;
    this.date = date;
    this.scheduling = scheduling;

  }

  get Value(){
    return this.value;
  }

  get Account(){
    return this.account;
  }

  get User(){
    return this.user;
  }

  get Date(){
    return this.date;
  }

  get Scheduling(){
    return this.scheduling;
  }

  set Value( value ){
    this.value = value;
  }

  set Account ( Account ){
    this.account = Account;
  }

  set User ( User ){
    this.user = User;
  }

  set Date ( Date ){
    this.date = Date;
  }

  set Scheduling ( Scheduling ){
    this.scheduling = Scheduling;
  }
}

module.exports = Outflow;