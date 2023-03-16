import { User } from '@supabase/supabase-js';
import useSupabase from './useSupabase';

const useAuth = () => {
  let user = useState<User | null>('user', () => null);
  const router = useRouter();
  const { supabase } = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  interface ISignUpProps {
    email: string;
    password: string;
    metadata?: Object;
  }

  const signUp = async ({ email: email, password: password, ...metadata }: ISignUpProps) => {
    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: `${window.location.origin}/profile?source=email`,
      },
    });
    if (error) throw error;

    return user;
  };

  interface ISignInProps {
    email: string;
    password: string;
  }

  const signIn = async ({ email, password }: ISignInProps) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return user;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push('/');
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
  };
};

export default useAuth;
