<?php namespace Examples\Ex1Module\Http\Controller\Admin;

use Examples\Ex1Module\Department\Form\DepartmentFormBuilder;
use Examples\Ex1Module\Department\Table\DepartmentTableBuilder;
use Anomaly\Streams\Platform\Http\Controller\AdminController;

class DepartmentsController extends AdminController
{

    /**
     * Display an index of existing entries.
     *
     * @param DepartmentTableBuilder $table
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(DepartmentTableBuilder $table)
    {
        return $table->render();
    }

    /**
     * Create a new entry.
     *
     * @param DepartmentFormBuilder $form
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function create(DepartmentFormBuilder $form)
    {
        return $form->render();
    }

    /**
     * Edit an existing entry.
     *
     * @param DepartmentFormBuilder $form
     * @param        $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(DepartmentFormBuilder $form, $id)
    {
        return $form->render($id);
    }
}
