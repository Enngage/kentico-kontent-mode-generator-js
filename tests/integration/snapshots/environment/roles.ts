export const roles = {
    /**
     * Content contributor
     */
    contentContributor: {
        name: 'Content contributor',
        codename: undefined,
        id: 'dca0ac85-274f-429e-b00e-6f74bf917051'
    },

    /**
     * Reviewer
     */
    reviewer: {
        name: 'Reviewer',
        codename: undefined,
        id: '94478afa-d898-45dd-8300-ba61b6e0eb4b'
    },

    /**
     * Project manager
     */
    projectManager: {
        name: 'Project manager',
        codename: 'project-manager',
        id: 'af95ac37-4efa-4b92-aa26-db773cd172c6'
    },

    /**
     * Developer
     */
    developer: {
        name: 'Developer',
        codename: undefined,
        id: 'b3994090-0818-4969-816b-f4c5d3e526f3'
    }
} as const;
