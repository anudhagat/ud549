function AddressBook() {
this.addressList = [];
  this.addContact= funtion(contact){
    this.addressList.push(contact);
  };
  this.getContact = function(num){
    return this.addressList[num];
  }
}
