export default {
	async usersByLimit (limit) {
		const users = fetchUsers.run({ limit: limit })
		return users
	}
}