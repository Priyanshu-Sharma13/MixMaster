import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Wrapper from '../wrapper/NewsLetter';
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
    console.log(request);
    const formData = await request.formData();
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);

    try{
        const response = await axios.post(newsletterUrl, data);
        console.log(response);
        toast.success(response.data.msg);
        return redirect('/');
    }   
    catch(error){
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
    }
} ;

const NewsLetter = () => {
    const submiting = useNavigation();
    const isSubmiting = submiting.state === 'submitting';
  return (
    <Wrapper>
      <div className="newsletter">
        <Form className="form" method="POST">
          <h4 className="newsletter-head">Our NewsLetter</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name :{' '}
            </label>
            <br></br>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="form-input"
            ></input>
          </div>
          <div className="form-row">
            <label htmlFor="lastname" className="form-label">
              Last Name :{' '}
            </label>
            <br></br>
            <input
              id="lastname"
              name="lastName"
              type="text"
              required
              className="form-input"
            ></input>
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email :{' '}
            </label>
            <br></br>
            <input
              id="email"
              name="email"
              type="text"
              required
              className="form-input"
              defaultValue="test@test.com"
            ></input>
          </div>
          <button type="submit" className="form-button" disabled={isSubmiting}>
            {isSubmiting ? 'Submitting' : 'Submit'}
          </button>
        </Form>
      </div>
    </Wrapper>
  )
}
export default NewsLetter
