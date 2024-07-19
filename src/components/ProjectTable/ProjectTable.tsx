import './ProjectTable.css'

export default function ProjectTable() {
    return (
        <div>
            <div className="container">
        <div className="row">
            <div className="col-md-offset-1 col-md-10">
                <div className="panel">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col col-sm-3 col-xs-12">
                                <h4 className="title">Data <span>List</span></h4>
                            </div>
                            <div className="col-sm-9 col-xs-12 text-right">
                                <div className="btn_group">
                                    {/* <input type="text" className="form-control" placeholder="Search" fdprocessedid="0xipas">
                                    <button className="btn btn-default" title="Reload" fdprocessedid="ufub1"><i className="fa fa-sync-alt"></i></button>
                                    <button className="btn btn-default" title="Pdf" fdprocessedid="7xb43s"><i className="fa fa-file-pdf"></i></button>
                                    <button className="btn btn-default" title="Excel" fdprocessedid="d5qse5"><i className="fas fa-file-excel"></i></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Age</th>
                                    <th>Job Title</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Vincent Williamson</td>
                                    <td>31</td>
                                    <td>iOS Developer</td>
                                    <td>Sinaai-Waas</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Taylor Reyes</td>
                                    <td>22</td>
                                    <td>UI/UX Developer</td>
                                    <td>Baileux</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Justin Block</td>
                                    <td>26</td>
                                    <td>Frontend Developer</td>
                                    <td>Overland Park</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Sean Guzman</td>
                                    <td>26</td>
                                    <td>Web Designer</td>
                                    <td>Gloucester</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Keith Carter</td>
                                    <td>20</td>
                                    <td>Graphic Designer</td>
                                    <td>Oud-Turnhout</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
                            <div className="col-sm-6 col-xs-6">
                                <ul className="pagination hidden-xs pull-right">
                                    {/* <li><a href="#"><</a></li> */}
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    {/* <li><a href="#">></a></li> */}
                                </ul>
                                <ul className="pagination visible-xs pull-right">
                                    {/* <li><a href="#"><</a></li> */}
                                    {/* <li><a href="#">></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="open_grepper_editor" title="Edit & Save To Grepper"></div>
        </div>
    )
}