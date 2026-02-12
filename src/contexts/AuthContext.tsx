import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "patient" | "doctor";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => boolean;
  signup: (name: string, email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: Record<string, User> = {
  "patient@demo.com": { id: "p1", name: "Rahul Sharma", email: "patient@demo.com", role: "patient" },
  "doctor@demo.com": { id: "d1", name: "Dr. Priya Patel", email: "doctor@demo.com", role: "doctor" },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string, role: UserRole): boolean => {
    const existing = mockUsers[email];
    if (existing) {
      setUser(existing);
      return true;
    }
    // Allow any login with mock user
    setUser({ id: `u-${Date.now()}`, name: role === "doctor" ? "Dr. Demo" : "Demo Patient", email, role });
    return true;
  };

  const signup = (name: string, email: string, _password: string, role: UserRole): boolean => {
    const newUser: User = { id: `u-${Date.now()}`, name, email, role };
    setUser(newUser);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
