export default function PhotoGrid() {
  const photos = [
    {
      id: 1,
      image: '/images/cover1.jpeg',
      title: 'Crystal Clear Waters',
      description: 'Experience the pristine underwater world of Cyprus'
    },
    {
      id: 2,
      image: 'https://divemagazine.com/wp-content/uploads/w_s_gallery3_shutterstock_130949009.jpg',
      title: 'Marine Life',
      description: 'Discover colorful fish and coral formations'
    },
    {
      id: 3,
      image: 'https://farm5.staticflickr.com/4664/38601689880_80183bac5a_c.jpg',
      title: 'Explore Biodiversity',
      description: 'Explore a new ecosystem beneath the waves'
    }
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img 
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                  <p className="text-gray-200 text-sm">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}