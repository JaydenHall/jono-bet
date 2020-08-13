
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, Question: 'Horse?', is_visible: true},
        {id: 2, Question: 'BetType', is_visible: true},
        {id: 3, Question: 'BetValue', is_visible: true}
      ]);
    });
};
