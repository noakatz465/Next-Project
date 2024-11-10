import { create } from 'zustand';
import { getUsers } from '../services/users';

interface UserStore {
  users: UserModel[];
  setUsers: (users: UserModel[]) => void;
  addUser: (user: UserModel) => void;
  fetchUsers: () => Promise<void>;
  updateUser: (updatedUser: UserModel) => void;
  deleteUser: (id: number) => void;
}

const useStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user]
    })),

  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
     
      ),
      
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  fetchUsers: async () => {
    try {
      const data = await getUsers();
      set({ users: data.users });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
}));
export default useStore;