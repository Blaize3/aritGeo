const assert = require("chai").assert;
const myApp = require("../src/main");

describe ("aritGeo", () => {

// Handle valid input
	describe ("handle valid inputs", () => {
		it("should return Arithmetic for a sequence[2, 8, 14, 20]", () => {
			assert.equal(myApp.aritGeo([2, 8, 14, 20]), "Arithmetic");
		});

		it("should return Arithmetic for a sequence[20, 30, 40, 50] as an Arithmetic", ()=>{
			assert.equal(myApp.aritGeo([20, 30, 40, 50]), "Arithmetic");
		});

		it("should return Geometric for a sequence[81, 27, 9, 3]", ()=>{
			assert.equal(myApp.aritGeo([81, 27, 9, 3]), "Geometric");
		});

		it("should return Geometric for a sequence[2, 8, 14, 20] as a Geometric", ()=>{
			assert.equal(myApp.aritGeo([1,1/2, 1/4,1/8 ]), "Geometric");
		});

		it("should return Arithmetic for a sequence[5, 8, 11, 14,17,20]", () => {
			assert.equal(myApp.aritGeo([5, 8, 11, 14,17,20]), "Arithmetic");
		});
	});

	describe ("handle invalid inputs", () => {
		it("should return undefined for a 2", () => {
			assert.equal(myApp.aritGeo(2), "undefined");
		});

		it("should return 0 for a sequence[]", ()=>{
			assert.equal(myApp.aritGeo([]), 0);
		});

		it("should return -1 for a sequence[81, 39, 9, 45]", ()=>{
			assert.equal(myApp.aritGeo([81, 39, 9, 45]), -1);
		});

		it("should return -1 for a sequence['ad', 'wr', '45', '45']", ()=>{
			assert.equal(myApp.aritGeo(['ad', 'wr', '45', '45']), -1);
		});

		it("should return -1 for a sequence['100', '56', '23', '66']", ()=>{
			assert.equal(myApp.aritGeo(['100', '56', '23', '66']), -1);
		});
	});
});	
///0000000000000000000000000000

//const CurrentAccount = require("CurrentAccount");
//const AccountHolder = require("AccountHolder");
//const SavingsAccount = require("SavingsAccount");//