export default {
	async usersByLimitAndCountry (limit, country) {
		const users = fetchUsers.run({ limit: limit, country: country })
		return users
	}
}