export class Register {
    static readonly type = '[Auth] Register';
    constructor(public payload: { username: string; password: string }) {}
  }
  
//   export class Login {
//     static readonly type = '[Auth] Login';
//     constructor(public payload: { username: string; password: string }) {}
//   }



export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { username: string; password: string }, public onSuccess?: () => void, public onError?: () => void) {}
  }
  
  export class Logout {
    static readonly type = '[Auth] Logout';
  }
  