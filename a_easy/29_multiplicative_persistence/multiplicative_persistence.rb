def MultiplicativePersistence(num)
  i = 0

  until num < 10
    i += 1 and num = num.to_s.split(//).map(&:to_i).inject(:*)
  end

  i
end

# keep this function call here
puts MultiplicativePersistence(STDIN.gets)
