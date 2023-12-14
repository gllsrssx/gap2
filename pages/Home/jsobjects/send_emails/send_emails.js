export default {
	userName : '',
	userId : '',
	userMail : '',
	
	subject : '',
	message : '',
	
	async sendEmailToUsers() {
		for (const user of mail_users.data) {
			this.userName = user.name;
			this.userMail = user.email;
			this.userId = user._id;
			
			this.subject = 'GAP!';
			this.message = user;
			
			try {
				await send_email.run();
				console.log(`Email sent to ${this.userName}`);
			} catch (error) {
				console.error(`Failed to send email to ${user.email}: ${error}`);
			}
				}
    }
}
