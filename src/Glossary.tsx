import React from 'react'

export default function Glossary(props) {

    return (
        <div>
            <dl>
                {props.items.map(item => (
                    // 没有`key`，React 会发出一个关键警告
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
}


