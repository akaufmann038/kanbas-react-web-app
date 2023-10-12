import ModuleList from "./ModuleList";

function Modules() {
  return (
    <div className="row">
      <div className="d-flex flex-column col-9" style={{ flexGrow: 1 }}>
        <h2>Modules</h2>
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;
