import toastr from 'toastr';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export function mostrarMensagem(titulo, mensagem, tipo) {
    toastr[tipo](mensagem, titulo);
}

export function mensagemErro(mensagem) {
    mostrarMensagem("Erro", mensagem, "error");
}