class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end
    game_over_message
    reset_game
  end

  def take_turn
    # show the sequence
    show_sequence
    #Gets user input
    require_sequence

    unless @game_over
      #Round Success
      round_success_message
      #Increments the seq length
      @sequence_length += 1
    end
  end

  def show_sequence
    puts add_random_color
    @seq.each do |color|
      puts color
      sleep(0.75)
      system("clear")
      sleep(0.25)
    end
  end

  def require_sequence
    puts "Now Repeat the Entire sequence. First letter only"
    @seq.each do |color|
      user_input = gets.chomp
      if user_input != color[0]
        @game_over = true
        break
      end
    end
    sleep(0.25)
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Hey Good Job! Ready for the next round?"
  end

  def game_over_message
    puts "You Have Lost the Game!"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end

holare = Simon.new.play