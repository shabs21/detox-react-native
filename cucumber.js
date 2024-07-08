module.exports = {
    default: {
      require: ['e2e/step_definitions/**/*.js', 'e2e/environment.js'],
      format: ['json:results/cucumber_report.json'],
      timeout: 120 * 1000,
    },
  };
  