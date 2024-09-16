import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { auth, getAuth } from '@clerk/nextjs/server'; // Assuming this is the correct method


const AddTransformationPage = async ({ params }) => {
  const {userId} = auth()
  const { type } = params;
  const transformation = transformationTypes[params.type];
  if (!userId) redirect('/sign-in');

  const user = await getUserById(userId);

  

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
      <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type} // No need for type casting in JS
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}

export default AddTransformationPage;
