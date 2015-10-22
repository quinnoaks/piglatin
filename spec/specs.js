describe('pigLatin', function() {
  it("adds 'ay' for words that start with a vowel", function() {
    expect(pigLatin("and")).to.equal("anday");
  });
});
