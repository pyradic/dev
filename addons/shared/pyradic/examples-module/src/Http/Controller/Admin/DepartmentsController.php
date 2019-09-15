<?php namespace Pyradic\ExamplesModule\Http\Controller\Admin;

use Pyradic\ExamplesModule\Department\Form\DepartmentFormBuilder;
use Pyradic\ExamplesModule\Department\Table\DepartmentTableBuilder;
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
