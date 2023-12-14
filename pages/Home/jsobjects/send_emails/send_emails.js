export default {
	userId : '',
	userName : '',
	userMail : '',
	now: '',
	
	subject : '',
	message : '',
	
	async sendEmailToUsers() {
		const delay = 1000 * 60 * 60 * 24 * 5;
    const now = new Date();
		
		for (const user of mail_users.data) {
			this.userId = user._id;
			this.userName = user.name;
			this.userMail = user.email;
			this.now = now;
			
			this.subject = 'GAP!';
			this.message = user;
			
			const lastEmailSent = new Date(user.lastEmailSent);
			if (now - lastEmailSent < delay) return;
			update_mail_delay.run();
			
			try {
				await send_email.run();
				console.log(`Email sent to ${this.userName}`);
			} catch (error) {
				console.error(`Failed to send email to ${user.email}: ${error}`);
			}
				}
    }
}
