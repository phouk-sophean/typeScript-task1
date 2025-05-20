class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: number, name: string, email: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public login(): boolean {
        return true
    }
    public register(): void {
        
    }
    public updatePassword(newPassword: string): void {
        this.password = newPassword;
    }
    public updageProfile(newName: string, newEmail: string): void{
        this.name = newName;
        this.email = newEmail;
    }
    public getName() {
        return this.name;
    }
}