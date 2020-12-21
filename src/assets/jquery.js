jQuery(function () {
    $(document).on('click', '.edit-button', function () {
        let index = $('.edit-button').index(this);

        let title = $('.edit-button').eq(index).data('title');
        let note = $('.edit-button').eq(index).data('note');
        let id = $('.edit-button').eq(index).data('id');

        $('#title').val(title);
        $('#note').val(note);
        $('.note-id').text(`NOTE ID: ${id}`);

        $('#edit-form').attr('action', `/edit-note/${id}`)
    });

    $(document).on('click', '.delete-button', function () {
        let index = $('.delete-button').index(this);

        let title = $('.delete-button').eq(index).data('title');
        let note = $('.delete-button').eq(index).data('note');
        let id = $('.delete-button').eq(index).data('id');

        $('.note-title').text(title);
        $('.note-id').text(`NOTE ID: ${id}`);
        $('#confirm-delete').attr('href', `delete-note/${id}`)
    });
});