const useAuth = () => {
  const user = useState('user', () => null);
  const { supabase } = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user ? session?.user : null;
  });

  interface ISignUpProps {
    email: string;
    password: string;
  }

  const signUp = async ({ email, password, ...metadata }: ISignUpProps) => {
    const { data: user, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      { data: metadata }
    );
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

  return {
    user,
    signUp,
    signIn,
  };
};

export default useAuth;
