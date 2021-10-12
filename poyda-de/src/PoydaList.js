import React from "react";
import './PoydaList.css'

const PoydaList = ({ mamun }) => {
    return (
        <>
            {
                    mamun.map((user) => {
                        const {
                            id,
                            name,
                            age,
                            image
                        } = user;
                        return (
                            <article key={id} className="user">
                                <img src={image} />
                                <div>
                                    <h4>{name}</h4>
                                    <p>{age} years old!!</p>
                                </div>
                            </article>
                        );
                    }
                )
            }
        </>
    );
};

export default PoydaList;