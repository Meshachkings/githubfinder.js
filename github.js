class Github{
    constructor(){
        this.client_id = "55b0430f9e90520c92e0";
        this.client_secret = "9c95ed99fa758ed4997177fcc0ff1b3f057cc6f2";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        return {
            profile
        }
    }
}