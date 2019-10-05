<?php
/**
 * @var \Anomaly\Streams\Platform\Ui\Form\Form|\Anomaly\Streams\Platform\Ui\Form\FormPresenter $form
 * @var \Anomaly\Streams\Platform\Asset\Asset $asset
 */
?>

{!! $form->open(['class' => 'form ' . $form->getOption('class')]) !!}

@include($form->getOption('heading', "streams::form/partials/heading"))
@include("streams::form/partials/layout")
@include("streams::form/partials/controls")
{!! $form->close() !!}
