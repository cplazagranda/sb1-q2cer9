import React, { useState } from 'react';
import { Share2, Instagram, Copy, SendHorizontal } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [question, setQuestion] = useState('');
  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('¡Enlace copiado!');
  };

  const handleShareToInstagram = () => {
    const instagramUrl = `instagram://story-camera`;
    window.location.href = instagramUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      toast.success('¡Pregunta enviada!');
      setQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="pt-8 px-4">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Pregúntame Anónimamente
          </h1>
          <p className="text-white/90 text-center mb-6">
            Comparte tu enlace y recibe preguntas anónimas
          </p>
          
          {/* Share Buttons */}
          <div className="flex gap-3 justify-center mb-4">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Copy size={18} />
              Copiar Link
            </button>
            <button
              onClick={handleShareToInstagram}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Instagram size={18} />
              Compartir en Instagram
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Escribe tu pregunta anónima
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                rows={4}
                placeholder="Tu pregunta quedará completamente anónima..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <SendHorizontal size={18} />
              Enviar Pregunta
            </button>
          </form>

          {/* Features */}
          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Share2 className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">100% Anónimo</h3>
                <p className="text-sm text-gray-600">
                  Tus preguntas son completamente anónimas y seguras
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-white/80 py-6">
        <p className="text-sm">
          Haz preguntas anónimas de forma segura y divertida
        </p>
      </footer>
    </div>
  );
}

export default App;