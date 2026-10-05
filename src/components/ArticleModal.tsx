import React, { useState } from 'react';
import { X, Heart, Bookmark, Share2, Check, Clock, User, Coffee, Send } from 'lucide-react';
import { BlogArticle } from '../types';

interface ArticleModalProps {
  article: BlogArticle;
  onClose: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  allArticles: BlogArticle[];
  onToggleLike: (articleId: string) => void;
  isLiked: boolean;
  likesCount: number;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  allArticles,
  onToggleLike,
  isLiked,
  likesCount,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Comments state
  const [comments, setComments] = useState(article.comments || []);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newCommentText.trim()) return;

    const newComment = {
      id: 'c_' + Date.now(),
      author: newAuthor.trim(),
      date: 'Just now',
      text: newCommentText.trim(),
    };

    setComments((prev) => [newComment, ...prev]);
    setNewAuthor('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  // Find related articles in same or adjacent categories
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#14100E]/75 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-10">
      <div className="bg-[#FAF7F2] border border-[#D5C6B7] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in duration-200">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8DFD4] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8E4A28] uppercase tracking-wider">
            <span>{article.category}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Like button */}
            <button
              onClick={() => onToggleLike(article.id)}
              className={`p-2 rounded-md border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isLiked
                  ? 'border-[#C84A31] bg-[#FCECE9] text-[#C84A31]'
                  : 'border-[#D5C6B7] hover:bg-[#F0E6DA] text-[#5A4B43]'
              }`}
              title="Like this article"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-mono tabular-nums">{likesCount}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-md border text-xs transition-colors cursor-pointer ${
                isBookmarked
                  ? 'border-[#8E4A28] bg-[#F4EDE5] text-[#8E4A28]'
                  : 'border-[#D5C6B7] hover:bg-[#F0E6DA] text-[#5A4B43]'
              }`}
              title="Save for later"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-md border border-[#D5C6B7] hover:bg-[#F0E6DA] text-[#5A4B43] text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              title="Share article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-[#EAE0D4] text-[#3D3028] transition-colors cursor-pointer ml-1"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <div className="p-6 sm:p-10 lg:p-12 max-w-3xl mx-auto">
          
          {/* Metadata: Author + Date + Read Time (Zero-Pill rule: clean unboxed text) */}
          <div className="flex items-center gap-2 text-xs text-[#7A6A61] mb-4">
            <span className="font-medium text-[#4A3B32]">{article.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{article.author.role}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916] tracking-tight leading-tight mb-6 [text-wrap:balance]">
            {article.title}
          </h1>

          {/* Cover Image */}
          <div className="mb-8 rounded-lg overflow-hidden border border-[#E8DFD4] bg-[#EDE4D9] aspect-[16/9]">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Intro Paragraph */}
          <div className="text-base sm:text-lg text-[#3D3028] leading-relaxed mb-8 font-serif italic border-l-2 border-[#8E4A28] pl-4 py-1">
            {article.content.intro}
          </div>

          {/* Optional Brew Parameters Card for Brew Guides */}
          {article.content.brewRecipe && (
            <div className="mb-10 p-5 bg-[#FFFFFF] border border-[#DECDBE] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E4A28] mb-3">
                <Coffee className="w-4 h-4" />
                <span>Morningside Brew Recipe Parameters</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#FAF7F2] p-2.5 rounded border border-[#EDE4D9]">
                  <span className="text-[#8C7A70] block text-[10px] uppercase">Coffee Dose</span>
                  <span className="font-bold text-[#1F1916] font-mono tabular-nums">{article.content.brewRecipe.coffeeGrams}g</span>
                </div>
                <div className="bg-[#FAF7F2] p-2.5 rounded border border-[#EDE4D9]">
                  <span className="text-[#8C7A70] block text-[10px] uppercase">Water Ratio</span>
                  <span className="font-bold text-[#1F1916] font-mono tabular-nums">{article.content.brewRecipe.ratio} ({article.content.brewRecipe.waterGrams}g)</span>
                </div>
                <div className="bg-[#FAF7F2] p-2.5 rounded border border-[#EDE4D9]">
                  <span className="text-[#8C7A70] block text-[10px] uppercase">Water Temp</span>
                  <span className="font-bold text-[#1F1916]">{article.content.brewRecipe.waterTemp}</span>
                </div>
                <div className="bg-[#FAF7F2] p-2.5 rounded border border-[#EDE4D9]">
                  <span className="text-[#8C7A70] block text-[10px] uppercase">Target Time</span>
                  <span className="font-bold text-[#1F1916] font-mono tabular-nums">{article.content.brewRecipe.brewTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-8 text-sm sm:text-base text-[#4A3B32] leading-relaxed">
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1F1916] pt-2">
                  {section.heading}
                </h3>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Callout Highlight */}
                {section.highlight && (
                  <div className="p-4 bg-[#F2ECE4] border border-[#DDD0C2] rounded-md text-xs sm:text-sm text-[#4A3B32] font-medium my-4">
                    <strong className="text-[#8E4A28] block mb-1">Key Principle:</strong>
                    {section.highlight}
                  </div>
                )}

                {/* Recipe step table */}
                {section.recipeTable && (
                  <div className="my-5 overflow-x-auto border border-[#E8DFD4] rounded-lg">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#F0E6DA] text-[#3D3028] font-semibold border-b border-[#E8DFD4]">
                        <tr>
                          <th className="py-2.5 px-3">Time Window</th>
                          <th className="py-2.5 px-3">Step</th>
                          <th className="py-2.5 px-3">Water Added</th>
                          <th className="py-2.5 px-3">Technique Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EDE4D9] bg-white">
                        {section.recipeTable.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF7F2]">
                            <td className="py-2 px-3 font-mono tabular-nums text-[#8E4A28] font-medium">{row.step}</td>
                            <td className="py-2 px-3 font-medium text-[#1F1916]">{row.time}</td>
                            <td className="py-2 px-3 font-mono tabular-nums font-semibold">{row.water}</td>
                            <td className="py-2 px-3 text-[#5C504A]">{row.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-[#E8DFD4] space-y-2">
              <h4 className="text-base font-serif font-bold text-[#1F1916]">
                Final Thoughts
              </h4>
              <p className="italic text-[#5C504A]">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#E8DFD4] flex items-center flex-wrap gap-2 text-xs text-[#7A6A61]">
            <span className="font-semibold text-[#4A3B32]">Tags:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="hover:text-[#8E4A28] transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-10 p-5 bg-white border border-[#E8DFD4] rounded-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8E4A28] font-bold font-serif text-lg shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-[#1F1916]">
                {article.author.name}
              </div>
              <div className="text-xs text-[#8E4A28] mb-1">
                {article.author.role} at Morningside Coffee
              </div>
              <div className="text-xs text-[#66574F]">
                Dedicated to sustainable origin sourcing, roast curve precision, and sharing transparent coffee knowledge with our community.
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-[#E8DFD4]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-[#1F1916]">
                Community Discussion ({comments.length})
              </h3>
              <span className="text-xs text-[#8C7A70]">Join the conversation</span>
            </div>

            {/* New Comment Form */}
            <form onSubmit={handleAddComment} className="mb-8 p-4 bg-white border border-[#E8DFD4] rounded-lg">
              <div className="text-xs font-semibold text-[#4A3B32] mb-3">Leave a Thought or Question</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Maya)"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28]"
                  required
                />
              </div>
              <textarea
                placeholder="Share your brewing results, questions, or tasting notes..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D5C6B7] rounded-md text-[#1F1916] placeholder-[#958378] focus:outline-none focus:ring-1 focus:ring-[#8E4A28] mb-3"
                required
              />
              <div className="flex items-center justify-between">
                {commentSuccess ? (
                  <span className="text-xs text-emerald-700 font-medium">Thank you! Your comment has been posted.</span>
                ) : (
                  <span className="text-[11px] text-[#8C7A70]">Comments are moderated for constructive discussion.</span>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2A201A] hover:bg-[#43332A] rounded-md transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-white border border-[#EFE8DF] rounded-lg">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-[#1F1916]">{comment.author}</span>
                    <span className="text-[#8C7A70] text-[11px]">{comment.date}</span>
                  </div>
                  <p className="text-xs text-[#55463D] leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E8DFD4]">
              <h4 className="text-base font-serif font-bold text-[#1F1916] mb-4">
                More from the Morningside Journal
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 bg-white border border-[#E8DFD4] rounded-lg hover:border-[#8E4A28] transition-colors cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] text-[#8E4A28] uppercase tracking-wider font-semibold mb-1">
                        {rel.category}
                      </div>
                      <h5 className="text-xs font-serif font-bold text-[#1F1916] line-clamp-2 mb-2">
                        {rel.title}
                      </h5>
                    </div>
                    <div className="text-[11px] text-[#8C7A70] flex items-center justify-between pt-2 border-t border-[#F2ECE4]">
                      <span>{rel.readTime}</span>
                      <span className="text-[#8E4A28] font-medium">Read &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
