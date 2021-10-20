import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="homeContainer">
            <Link to="/login">
                <button>Already a Member?</button>
            </Link>
            <Link to="/signup">
                <button>New to Anywhere Fitness?</button>
            </Link>
        </div>
    );
}
