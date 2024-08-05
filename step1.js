document.addEventListener("DOMContentLoaded", function () {
    const element = {
        type: "h1",
        props: {
            title: "foo",
            children: "Hello",
        },
    };

    const container = document.getElementById("root");

    const node = document.createElement(element.type);
    node.title = element.props.title;

    const text = document.createTextNode(element.props.children);
    
    node.appendChild(text);
    container.appendChild(node);
});