import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, Logout, Register } from './auth.actions';

export interface AuthStateModel {
  authenticated: boolean;
  token: string | null;
  users: Array<any>;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authenticated: false,
    token: null,
    users: [{ username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },],
  },
})
export class AuthState {
  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.authenticated;
  }



@Action(Register)
register(ctx: StateContext<AuthStateModel>, action: Register) {
  const state = ctx.getState();
  const newUser = action.payload;
  const updatedUsers = [...state.users, newUser];
  ctx.patchState({ users: updatedUsers });
}


    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
      const state = ctx.getState();
      const user = state.users.find(
        (u) => u.username === action.payload.username && u.password === action.payload.password
      );
    
      if (user) {
        ctx.patchState({ authenticated: true, token: 'dummy-token' });
        if (action.onSuccess) {
          action.onSuccess();
        }
      } else {
        if (action.onError) {
          action.onError();
        }
      }
    }
    
  
  

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      authenticated: false,
      token: null,
    });
  }
}

// src/app/store/auth.state.ts

// import { State, Selector, Action, StateContext } from '@ngxs/store';
// import { Login, Logout, Register } from './auth.actions';

// export interface AuthStateModel {
//   authenticated: boolean;
//   token: string | null;
//   users: { username: string; password: string }[];
//   username: string | null;
// }

// @State<AuthStateModel>({
//   name: 'auth',
//   defaults: {
//     authenticated: false,
//     token: null,
//     users: [
//       { username: 'user1', password: 'password1' },
//       { username: 'user2', password: 'password2' },
//       { username: 'user3', password: 'password3' },
//     ],
//     username: null,
//   },
// })
// export class AuthState {
//   @Selector()
//   static isAuthenticated(state: AuthStateModel): boolean {
//     return state.authenticated;
//   }

//   @Selector()
//   static username(state: AuthStateModel): string | null {
//     return state.username;
//   }

//   @Action(Login)
//   login(ctx: StateContext<AuthStateModel>, action: Login) {
//     const state = ctx.getState();
//     const user = state.users.find(
//       (u) => u.username === action.payload.username && u.password === action.payload.password
//     );

//     if (user) {
//       ctx.patchState({ authenticated: true, token: 'dummy-token', username: user.username });

//       if (action.onSuccess) {
//         action.onSuccess();
//       }
//     } else {
//       if (action.onError) {
//         action.onError();
//       }
//     }
//   }

//   @Action(Logout)
//   logout(ctx: StateContext<AuthStateModel>) {
//     ctx.setState({ authenticated: false, token: null, users: ctx.getState().users, username: null });
//   }

//   @Action(Register)
//   register(ctx: StateContext<AuthStateModel>, action: Register) {
//     const state = ctx.getState();
//     const newUser = action.payload;
//     const updatedUsers = [...state.users, newUser];
//     ctx.patchState({ users: updatedUsers });
//   }
// }
