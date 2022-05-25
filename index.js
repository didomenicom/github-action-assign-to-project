const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
	try {
		const org_name = core.getInput('org_name', { required: true });
		const token = core.getInput('token', { required: true });

		const octokit = new github.getOctokit(token);

		octokit.rest.projects.listForOrg({
			org: org_name,
		});
	} catch (error) {
		core.setFailed(error.message);
	}
})();
