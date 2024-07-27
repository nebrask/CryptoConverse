import "./Auth.css"
import { useLocation, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import { Button } from "@/components/ui/button"
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'


const Auth = () => {
  const navigate=useNavigate();
  const location=useLocation();

  return (
    <div className='h-screen relative auth-container'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#030712] bg-opacity-50'>
        <div className='auth-modal bg-blure flex flex-col justify-center items-center shadow-blue-500 bg-opacity-50 shadow-2xl'>
          <h1 className='text-6xl font-bold pb-10'>CryptoConverse</h1>
          {location.pathname=="/signup"? (
          <section className="w-full">
            <SignUp/>
            <div className='flex items-center justify-center mt-2'>
              <span>Already have an account?</span>
              <Button onClick={()=>navigate("/signin")} variant="ghost">Sign in</Button>
            </div>
          </section>
          ) :location.pathname=="/forgot-password"? (
          <section className="w-full">
            <ForgotPassword/>
            <div className='flex items-center justify-center mt-2'>
              <span>Back to login?</span>
              <Button onClick={()=>navigate("/signin")} variant="ghost">Sign in</Button>
            </div>
          </section>
          ) : (
            <section className="w-full">
              <SignIn/>
              <div className='flex items-center justify-center mt-2'>
                <span>Don't have an account?</span>
                <Button onClick={()=>navigate("/signup")} variant="ghost">Sign up</Button>
              </div>
              <div className="mt-10">
                <Button onClick={()=>navigate("/forgot-password")} variant="outline" className='w-full py-5'>
                  Forgot password
                  </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth