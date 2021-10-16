const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/libs/shared/data-access/interfaces',
    '<rootDir>/libs/frontend-client/data-access/root-store',
    '<rootDir>/libs/frontend/ui/components',
  ],
};
