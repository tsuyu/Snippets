function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

// to call, use:
resetForm($('#myform')); // by id, recommended
resetForm($('form[name=myName]')); // by name