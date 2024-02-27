const heading = React.createElement("div", { id: "main" },[ 
    React.createElement("div", { id: "main2" },[
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h2", {}, "i'm an h2 tag")])]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)