import {useState} from 'react';
import Nav from './Nav';
import axios from 'axios';


const Create= () =>{

    const [state, setState] = useState({
        title:'',
        content:'',
        user:''
    });

const {title, content, user} = state;

const handleChange = (name) => (event) => {

   console.log("name = " + name + "event =" +event.target.value )
    setState({...state, [name] :  event.target.value});

}

const onSubmitHandler = (event) =>{

    event.preventDefault();

    axios.post(`${process.env.REACT_APP_API}/create`, {title, content, user})
    .then((response)=>{
        console.log(response.data.title);
        alert(`Your post ${response.data.title} was successfully created`);
        setState({state, title: '', content:'', user:''})
    })
    .catch((err)=>{
        console.log(err.response.data);
        alert(`There was an error in creating the post`);
    })


}


    return(
        <div className="container p-5">
        <br />
            <Nav/>
            <h1>CREATE POST</h1>
            <br/ >
            {JSON.stringify(state)}
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="text-muted">Post Ttitle</label>
                    <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Post Ttitle" required />
                </div>
                <div className="form-group">
                    <label className="text-muted">Post Content</label>
                    <textarea onChange={handleChange('content')}  value={content} type="text" className="form-control" placeholder="Post Content" required />
                </div>
                <div className="form-group">
                    <label className="text-muted">Your Name</label>
                    <input type="text" onChange={handleChange('user')}  value={user} className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )

}

export default Create;