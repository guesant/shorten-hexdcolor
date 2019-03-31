import splitColor from '../tools/standardize/split-color';
import preventOverflowHex from '../tools/others/prevent-overflow-hex';

const shortenHexdColor = (hexColor) => {
  // Tratar a entrada do usuário.
  // Exemplo: hexColor = '#deea2e' => hexNumber = 'DEEA2E'
  const hexNumber = splitColor(hexColor);

  // Registrando a variável de retorno, que conterá o um array com os hexadecimais finais
  const shortedHexdColor = hexNumber.map((numbers) => {    
    const leftNumbers = {
      // Exemplo: numbers[0] = 'E' => prev = 'D'
      prev: preventOverflowHex({mode: -1, number: numbers[0]}),
      
      // Exemplo: numbers = 'EA' => original = 'E'
      original: numbers[0],

      // Exemplo: numbers[0] = 'E' => next = 'F'
      next: preventOverflowHex({mode: 1, number: numbers[0]}),
    }

    // Duplicando as letras
    const duplicatedNumbers = {
      // DD
      prev: leftNumbers.prev.repeat(2),

      // EE
      original: leftNumbers.original.repeat(2),

      // FF
      next: leftNumbers.next.repeat(2),
    }

    // Vendo o que elas representam em base decimal
    const duplicatedToDecimal = {
      original: parseInt(duplicatedNumbers.original, 16),
      prev: parseInt(duplicatedNumbers.prev, 16),
      next: parseInt(duplicatedNumbers.next, 16),
    }

    const duplicatedAndValue = [
      {
        represents: duplicatedNumbers.prev,
        difference: parseInt(numbers, 16) - duplicatedToDecimal.prev,
      },
      {
        represents: duplicatedNumbers.original,
        difference: Math.abs(parseInt(numbers, 16) - duplicatedToDecimal.original),
      },
      {
        represents: duplicatedNumbers.next,
        difference: duplicatedToDecimal.next - parseInt(numbers, 16),
      }
    ]
    // Ver a menor diferença
    const minimalDiference = duplicatedAndValue.reduce((minimal, currentValue) => {
      const isCurrentMinimal = currentValue.difference < minimal.difference;
      return isCurrentMinimal ? currentValue : minimal;
    }, { difference: 255 });

    // Adicionando o EE
    return minimalDiference.represents;
  });

  return shortedHexdColor.join('');
};

export default shortenHexdColor;