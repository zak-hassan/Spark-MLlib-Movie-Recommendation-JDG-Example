//import React from "react";

export function Range(start, end) {
  return Array.from({length: (end - start)}, (v, k) => k + start);
}

// export function CreateDropDownForm(layout, callback){
//
//   let inputDropDowns = layout.map((p, i) => {
//     return <DropDownGroup key={i} options={p.options} label={p.label}/>
//   });
//
//   // ToDo: disabled must be changed to enabled when all fields are set
//   return (
//     <form className="form-horizontal" role="form" onSubmit={callback}>
//       <p className="fields-status-pf">All fields are required.</p>
//       {inputDropDowns}
//       <div className="form-group">
//         <div className="col-sm-offset-2 col-sm-10">
//           <button type="submit" className="btn btn-default">Submit</button>
//         </div>
//       </div>
//     </form>
//   )
// }
