module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('moovies_categories', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    moovie_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'moovies',
        key: 'id',
      },
      onDelete: 'CASCADE',
      allowNull: false,
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: queryInterface => queryInterface.dropTable('moovies_categories'),
};

