import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className=" ">
            <div className="flex border-b border-gray-500">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${
                            activeTab === child.props.label ? 'border-b-2 border-gray-600 text-gray-800 ' : 'text-gray-600'
                        } flex-1   font-medium py-2`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};
export { Tabs, Tab };