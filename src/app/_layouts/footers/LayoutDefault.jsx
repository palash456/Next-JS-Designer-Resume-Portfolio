import AppData from "@data/app.json";

const DefaultFooter = () => {
  return (
    <>
        {/* container */}
        <div className="container-fluid">

        {/* footer */}
        <footer className="footer">
            {/* copyright */}
            <div className="art-copy">{AppData.footer.copy}</div>
            
            {/* developer */}
            <div dangerouslySetInnerHTML={{__html : AppData.footer.developer}} />
        </footer>
        {/* footer end */}

        </div>
        {/* container end */}
    </>
  );
};
export default DefaultFooter;
