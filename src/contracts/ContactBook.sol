// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContactBook {
    struct Contact {
        string name;
        string phone;
        address owner;
    }

    mapping(uint => Contact) public contacts;
    uint public contactCount;

    function addContact(string memory _name, string memory _phone) public {
        contacts[contactCount] = Contact(_name, _phone, msg.sender);
        contactCount++;
    }

    function getContact(uint _id) public view returns (string memory, string memory) {
        require(_id < contactCount, "Contact does not exist.");
        return (contacts[_id].name, contacts[_id].phone);
    }

    function deleteContact(uint _id) public {
        require(_id < contactCount, "Contact does not exist.");
        require(contacts[_id].owner == msg.sender, "Not authorized.");
        delete contacts[_id];
    }
}
