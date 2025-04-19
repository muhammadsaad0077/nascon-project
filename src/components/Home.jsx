export default function Home() {
    return (
      <div className="min-h-screen text-gray-800">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold bg-opacity-60 ">
            <img src="https://t3.ftcdn.net/jpg/05/07/66/58/360_F_507665856_dFXIKJJ4SwROG0df8GNPBhqsZV44p6jn.jpg" className="w-16 h-16"/>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-outline btn-sm">Sign In</button>
            <button className="btn btn-primary btn-sm">Sign Up</button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section
        className="relative flex flex-col justify-center items-center text-center px-6 py-20 text-white h-[600px] rounded-lg"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/972918608/photo/kids-learning-inspiration-in-successful-education-with-creative-imagination-for-back-to-school.jpg?s=612x612&w=0&k=20&c=1aXokSroiCL1OkZrEmpsJ6RDeRiLjxsMw0D8-lA340A=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 rounded-lg animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in-up">
            Empowering Learning with AI
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 animate-slide-in-up delay-200">
            Join our platform to learn from the best tutors with AI-enhanced learning tools.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in delay-500">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </section>
  
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p>Our team includes highly qualified educators dedicated to your success.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
            <p>Enhance your learning with smart tools that adapt to your pace and style.</p>
          </div>
          <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Interactive Platform</h3>
            <p>Engage with real-time communication and collaborative features.</p>
          </div>
        </div>
      </section>
      </div>
    );
  }
  